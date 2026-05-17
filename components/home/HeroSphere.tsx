"use client";
import { useRef, useEffect } from "react";

export default function HeroSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!canvas.offsetParent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const S = 480;
    canvas.width  = S * DPR;
    canvas.height = S * DPR;
    ctx.scale(DPR, DPR);
    const cx = S / 2, cy = S / 2, R = 168;

    const N = 52;
    const φ = Math.PI * (3 - Math.sqrt(5));
    const base = Array.from({ length: N }, (_, i) => {
      const y  = 1 - (i / (N - 1)) * 2;
      const r  = Math.sqrt(Math.max(0, 1 - y * y));
      const th = φ * i;
      return { x: Math.cos(th) * r, y, z: Math.sin(th) * r };
    });

    const THR = 0.60;
    const conns: [number, number][] = [];
    for (let i = 0; i < N; i++)
      for (let j = i + 1; j < N; j++) {
        const a = base[i], b = base[j];
        if (Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z) < THR)
          conns.push([i, j]);
      }

    const project = (x: number, y: number, z: number) => {
      const fov = 4.2;
      const sc  = fov / (fov + z * 0.75);
      return { px: cx + x * R * sc, py: cy + y * R * sc, sc, z };
    };

    let angle = 0;
    const tiltY = 0.18;

    const draw = () => {
      ctx.clearRect(0, 0, S, S);
      angle += 0.0025;

      const ca = Math.cos(angle), sa = Math.sin(angle);
      const ct = Math.cos(tiltY),  st = Math.sin(tiltY);
      const rot = base.map(n => {
        const x1 =  n.x * ca + n.z * sa;
        const z1 = -n.x * sa + n.z * ca;
        const y2 =  n.y * ct - z1 * st;
        const z2 =  n.y * st + z1 * ct;
        return { x: x1, y: y2, z: z2 };
      });

      const proj = rot.map(n => project(n.x, n.y, n.z));

      const bgGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 210);
      bgGlow.addColorStop(0,   "rgba(59,130,246,0.10)");
      bgGlow.addColorStop(0.4, "rgba(99,102,241,0.06)");
      bgGlow.addColorStop(1,   "transparent");
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, S, S);

      const bloom = ctx.createRadialGradient(cx + 30, cy - 30, 0, cx, cy, 260);
      bloom.addColorStop(0,   "rgba(139,92,246,0.07)");
      bloom.addColorStop(1,   "transparent");
      ctx.fillStyle = bloom;
      ctx.fillRect(0, 0, S, S);

      const connsSorted = [...conns].sort(([i, j], [k, l]) =>
        (rot[i].z + rot[j].z) - (rot[k].z + rot[l].z)
      );

      connsSorted.forEach(([i, j]) => {
        const a = proj[i], b = proj[j];
        const avgZ = (rot[i].z + rot[j].z) / 2;
        const vis  = Math.max(0, (avgZ + 1) / 2);
        if (vis < 0.05) return;

        const g = ctx.createLinearGradient(a.px, a.py, b.px, b.py);
        const blue   = `rgba(59,130,246,${vis * 0.75})`;
        const violet = `rgba(139,92,246,${vis * 0.55})`;
        g.addColorStop(0,   violet);
        g.addColorStop(0.5, blue);
        g.addColorStop(1,   violet);

        ctx.beginPath();
        ctx.moveTo(a.px, a.py);
        ctx.lineTo(b.px, b.py);
        ctx.strokeStyle = g;
        ctx.lineWidth   = vis * 1.4;
        ctx.stroke();
      });

      const order = rot.map((_, i) => i).sort((a, b) => rot[a].z - rot[b].z);

      order.forEach(i => {
        const p  = proj[i];
        const d  = Math.max(0, (rot[i].z + 1) / 2);
        const nr = p.sc * 7 + 2;

        const col = d > 0.65
          ? [59, 130, 246]
          : d > 0.35
          ? [99, 102, 241]
          : [139, 92, 246];
        const [cr, cg, cb] = col;
        const opacity = d * 0.55 + 0.38;

        ctx.save();
        ctx.shadowBlur  = d * 24 + 6;
        ctx.shadowColor = `rgba(${cr},${cg},${cb},0.9)`;

        ctx.beginPath();
        ctx.arc(p.px, p.py, nr * 1.9, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cr},${cg},${cb},${d * 0.08})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.px, p.py, nr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cr},${cg},${cb},${opacity})`;
        ctx.fill();
        ctx.restore();

        ctx.beginPath();
        ctx.arc(p.px - nr * 0.28, p.py - nr * 0.3, nr * 0.34, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${d * 0.5})`;
        ctx.fill();
      });

      const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, 50);
      core.addColorStop(0,   "rgba(120,160,255,0.18)");
      core.addColorStop(1,   "transparent");
      ctx.fillStyle = core;
      ctx.fillRect(0, 0, S, S);

      const plat = ctx.createRadialGradient(cx, cy + R * 0.85, 0, cx, cy + R * 0.85, 130);
      plat.addColorStop(0,   "rgba(59,130,246,0.35)");
      plat.addColorStop(0.5, "rgba(99,102,241,0.12)");
      plat.addColorStop(1,   "transparent");
      ctx.fillStyle = plat;
      ctx.fillRect(0, 0, S, S);

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="relative" style={{ width: 480, height: 480, maxWidth: "100%" }} aria-hidden="true">
      <canvas ref={canvasRef} style={{ width: 480, height: 480, display: "block" }} />

      <div style={{ position:"absolute", top:"6%", right:"4%", animation:"float 5s ease-in-out 0.4s infinite" }}>
        <div style={{ background:"rgba(4,9,19,0.90)", border:"1px solid rgba(59,130,246,0.55)", borderRadius:10, padding:"8px 14px", backdropFilter:"blur(14px)", boxShadow:"0 8px 32px rgba(0,0,0,0.55), 0 0 14px rgba(59,130,246,0.18)" }}>
          <div style={{ fontSize:8, color:"rgba(148,163,184,0.55)", marginBottom:4, fontFamily:"monospace" }}>PageSpeed Insights</div>
          <div style={{ display:"flex", alignItems:"baseline", gap:4 }}>
            <span style={{ fontSize:22, fontWeight:800, color:"#22c55e", fontFamily:"monospace", lineHeight:1 }}>96</span>
            <span style={{ fontSize:9, color:"rgba(74,222,128,0.7)" }}>/100</span>
          </div>
        </div>
      </div>

      <div style={{ position:"absolute", bottom:"3%", left:"2%", animation:"float 6.5s ease-in-out 1.2s infinite" }}>
        <div style={{ background:"rgba(4,9,19,0.90)", border:"1px solid rgba(139,92,246,0.45)", borderRadius:10, padding:"9px 13px", backdropFilter:"blur(14px)", boxShadow:"0 8px 32px rgba(0,0,0,0.5)" }}>
          <div style={{ fontSize:8, color:"rgba(148,163,184,0.5)", marginBottom:5, fontFamily:"monospace" }}>Tech Stack</div>
          {([["Next.js","#93c5fd"],["TypeScript","#a78bfa"],["Tailwind","#67e8f9"]] as [string,string][]).map(([t,c]) => (
            <div key={t} style={{ fontSize:9, color:c, fontFamily:"monospace", lineHeight:1.9 }}>▸ {t}</div>
          ))}
        </div>
      </div>

      <div style={{ position:"absolute", top:"38%", right:"-2%", animation:"float 4.8s ease-in-out 2s infinite" }}>
        <div style={{ background:"rgba(4,9,19,0.90)", border:"1px solid rgba(34,197,94,0.4)", borderRadius:8, padding:"6px 11px", backdropFilter:"blur(12px)", display:"flex", alignItems:"center", gap:7 }}>
          <div style={{ width:7, height:7, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 8px rgba(34,197,94,0.8)" }} />
          <span style={{ fontSize:10, color:"#4ade80", fontFamily:"monospace", fontWeight:600 }}>Live deploy</span>
        </div>
      </div>

      <div style={{ position:"absolute", top:"16%", left:"3%", animation:"float 5.8s ease-in-out 0.8s infinite" }}>
        <div style={{ background:"rgba(4,9,19,0.90)", border:"1px solid rgba(99,102,241,0.4)", borderRadius:8, padding:"6px 11px", backdropFilter:"blur(12px)" }}>
          <span style={{ fontSize:9, color:"#818cf8", fontFamily:"monospace", fontWeight:600 }}>SEO ✦ Core Web Vitals</span>
        </div>
      </div>

      <div style={{ position:"absolute", bottom:"8%", right:"5%", animation:"float 7s ease-in-out 1.8s infinite" }}>
        <div style={{ background:"rgba(4,9,19,0.90)", border:"1px solid rgba(249,115,22,0.4)", borderRadius:10, padding:"7px 13px", backdropFilter:"blur(14px)", boxShadow:"0 6px 24px rgba(0,0,0,0.5)" }}>
          <div style={{ fontSize:8, color:"rgba(148,163,184,0.5)", marginBottom:4, fontFamily:"monospace" }}>CDN / Edge</div>
          <div style={{ display:"flex", alignItems:"center", gap:6 }}>
            <div style={{ width:6, height:6, borderRadius:"50%", background:"#fb923c", boxShadow:"0 0 6px rgba(251,146,60,0.8)" }} />
            <span style={{ fontSize:10, color:"#fb923c", fontFamily:"monospace", fontWeight:700 }}>Cloudflare Pages</span>
          </div>
        </div>
      </div>

      <div style={{ position:"absolute", top:"55%", left:"-2%", animation:"float 6.2s ease-in-out 3s infinite" }}>
        <div style={{ background:"rgba(4,9,19,0.90)", border:"1px solid rgba(34,197,94,0.35)", borderRadius:10, padding:"8px 13px", backdropFilter:"blur(14px)" }}>
          <div style={{ fontSize:8, color:"rgba(148,163,184,0.5)", marginBottom:3, fontFamily:"monospace" }}>Largest Contentful Paint</div>
          <div style={{ display:"flex", alignItems:"baseline", gap:3 }}>
            <span style={{ fontSize:18, fontWeight:800, color:"#22c55e", fontFamily:"monospace", lineHeight:1 }}>0.9</span>
            <span style={{ fontSize:9, color:"rgba(74,222,128,0.7)" }}>s</span>
          </div>
        </div>
      </div>

      <div style={{ position:"absolute", top:"2%", left:"28%", animation:"float 5.4s ease-in-out 0.3s infinite" }}>
        <div style={{ background:"rgba(4,9,19,0.90)", border:"1px solid rgba(148,163,184,0.2)", borderRadius:8, padding:"6px 12px", backdropFilter:"blur(12px)", display:"flex", alignItems:"center", gap:6 }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>
          <span style={{ fontSize:9, color:"#94a3b8", fontFamily:"monospace", fontWeight:600 }}>CI/CD · git push → deploy</span>
        </div>
      </div>
    </div>
  );
}
