/* ---------- colour helpers ---------- */
export const mix=(a,b,t)=>{const q=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));const A=q(a),B=q(b);
  return '#'+A.map((v,i)=>Math.round(v+(B[i]-v)*t).toString(16).padStart(2,'0')).join('')};

/* ---------- drawing: front elevation, feet on y = 336 ---------- */
const G=336,n1=v=>+v.toFixed(1);
const R=(x,y,w,h,rx,cls)=>`<rect x="${n1(x)}" y="${n1(y)}" width="${n1(w)}" height="${n1(h)}" rx="${rx}" class="${cls}"/>`;
const OV=(x,y,w,h,rx,g)=>`<rect x="${n1(x)}" y="${n1(y)}" width="${n1(w)}" height="${n1(h)}" rx="${rx}" fill="url(#${g})"/>`;
const S=(x,y,w,h,rx,cls,sh='V')=>R(x,y,w,h,rx,cls)+(sh.includes('V')?OV(x,y,w,h,rx,'gV'):'')+(sh.includes('H')?OV(x,y,w,h,rx,'gH'):'');
const shadow=(cx,rx,ry=11)=>`<ellipse cx="${cx}" cy="${G+3}" rx="${rx}" ry="${ry}" fill="#000" opacity=".32" filter="url(#fb)"/>`;
const post=(x,y,cls='f-leg')=>`<path class="${cls}" d="M${x-6} ${y}L${x+6} ${y}L${x+3.5} ${G}L${x-3.5} ${G}Z"/>`;
const grain=(x,y,w,n=3)=>Array.from({length:n},(_,i)=>`<path d="M${n1(x+w*(.08+i*.11))} ${y+5+i*6}h${n1(w*(.34+i*.08))}" stroke="#000" stroke-opacity=".1" stroke-width="1" fill="none"/>`).join('');
const slabTop=(x0,W,y0,t,d)=>`<path class="f-hi" d="M${n1(x0+d)} ${n1(y0-d*.62)}L${n1(x0+W-d)} ${n1(y0-d*.62)}L${n1(x0+W)} ${y0}L${n1(x0)} ${y0}Z"/>`
  +`<path d="M${n1(x0+d)} ${n1(y0-d*.62)}L${n1(x0+W-d)} ${n1(y0-d*.62)}" stroke="#fff" stroke-opacity=".25" fill="none"/>`
  +S(x0,y0,W,t,3,'f-c','V');
const disc=(cx,y0,D,t,ry)=>{const r=D/2,x0=cx-r,x1=cx+r;
  return `<path class="f-c" d="M${x0} ${y0}A${r} ${ry} 0 0 0 ${x1} ${y0}L${x1} ${y0+t}A${r} ${ry} 0 0 1 ${x0} ${y0+t}Z"/>`
   +`<path fill="url(#gH)" d="M${x0} ${y0}A${r} ${ry} 0 0 0 ${x1} ${y0}L${x1} ${y0+t}A${r} ${ry} 0 0 1 ${x0} ${y0+t}Z"/>`
   +`<ellipse cx="${cx}" cy="${y0}" rx="${r}" ry="${ry}" class="f-hi"/>`};
/* still life: a ceramic vase with dried stems, in fixed neutral tones */
const vase=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})">`
  +`<path d="M-4 -46Q-30 -92 -22 -128M2 -46Q6 -100 20 -138M6 -46Q34 -84 40 -112" stroke="#4B3A2B" stroke-width="1.6" fill="none" stroke-linecap="round"/>`
  +`<circle cx="-22" cy="-129" r="3.2" fill="#6b5240"/><circle cx="20" cy="-139" r="3.2" fill="#6b5240"/><circle cx="40" cy="-113" r="3" fill="#6b5240"/><circle cx="-13" cy="-96" r="2.4" fill="#6b5240"/>`
  +`<path d="M-13 0C-27 -18 -11 -30 -7 -48L7 -48C11 -30 27 -18 13 0Z" fill="#DDD1BB"/><path d="M-13 0C-27 -18 -11 -30 -7 -48L-2 -48C-6 -30 -18 -18 -6 0Z" fill="#000" opacity=".1"/></g>`;
const bowl=(x,y,w)=>`<path d="M${x-w/2} ${y}C${x-w/2+6} ${y+16} ${x+w/2-6} ${y+16} ${x+w/2} ${y}Z" fill="#E3D8C4"/><path d="M${x-w/2} ${y}C${x-w/2+6} ${y+16} ${x+w/2-6} ${y+16} ${x+w/2} ${y}" fill="#000" opacity=".08"/>`;

const DRAW={
 sofa(cx,z){const W=z.W,k=z.k,x0=cx-W/2,x1=cx+W/2,cw=(W-104-(k-1)*5)/k;
  let s=shadow(cx,W/2+18)+post(x0+40,282)+post(x1-40,282)+S(x0+18,258,W-36,30,7,'f-lo');
  for(let i=0;i<k;i++)s+=S(x0+52+i*(cw+5),98,cw,142,24,'f-c ol','VH');
  for(let i=0;i<k;i++)s+=S(x0+52+i*(cw+5),204,cw,62,16,'f-c ol','VH')+`<path d="M${n1(x0+66+i*(cw+5))} 210h${n1(cw-28)}" stroke="#fff" stroke-opacity=".22" fill="none"/>`;
  return s+S(x0,148,58,134,26,'f-c ol','VH')+S(x1-58,148,58,134,26,'f-c ol','VH')},
 arm(cx,z){const W=z.W,x0=cx-W/2,x1=cx+W/2;
  let s=shadow(cx,W/2+14)+`<path class="f-leg" d="M${x0+26} 290L${x0+44} 290L${x0+30} ${G}L${x0+20} ${G}Z"/><path class="f-leg" d="M${x1-26} 290L${x1-44} 290L${x1-30} ${G}L${x1-20} ${G}Z"/>`;
  s+=S(x0+26,90,W-52,156,36,'f-c ol','VH')+S(x0+20,208,W-40,66,24,'f-c ol','VH')+`<path d="M${n1(x0+44)} 216h${n1(W-88)}" stroke="#fff" stroke-opacity=".22" fill="none"/>`;
  return s+S(x0,170,22,122,8,'f-leg','H')+S(x1-22,170,22,122,8,'f-leg','H')+S(x0-8,160,38,16,8,'f-leg','V')+S(x1-30,160,38,16,8,'f-leg','V')},
 bench(cx,z){const W=z.W,x0=cx-W/2,x1=cx+W/2;
  return shadow(cx,W/2+14)+post(x0+30,276)+post(x1-30,276)+S(x0+10,266,W-20,18,5,'f-lo')
   +S(x0,206,W,66,28,'f-c ol','VH')+`<path d="M${n1(x0+30)} 214H${n1(x1-30)}" stroke="#fff" stroke-opacity=".24" fill="none"/>`},
 side(cx,z){const D=z.W,x0=cx-D/2,x1=cx+D/2,y0=G-152;
  let s=shadow(cx,D/2+10,8)+`<path class="f-lo" d="M${cx-5} ${y0+10}L${cx+5} ${y0+10}L${cx+3} ${G-4}L${cx-3} ${G-4}Z"/>`
   +`<path class="f-c" d="M${x0+20} ${y0+10}L${x0+36} ${y0+10}L${x0+14} ${G}L${x0+5} ${G}Z"/><path class="f-c" d="M${x1-20} ${y0+10}L${x1-36} ${y0+10}L${x1-14} ${G}L${x1-5} ${G}Z"/>`
   +`<path d="M${x0+20} ${y0+10}L${x0+36} ${y0+10}L${x0+14} ${G}L${x0+5} ${G}ZM${x1-20} ${y0+10}L${x1-36} ${y0+10}L${x1-14} ${G}L${x1-5} ${G}Z" fill="url(#gV)"/>`;
  return s+disc(cx,y0,D,14,9)+vase(cx+D*.12,y0-2,.62)},
 slab(cx,z){const W=z.W,x0=cx-W/2,x1=cx+W/2,y0=G-108,t=32;
  return shadow(cx,W/2+16)+S(x0+30,y0+t-4,42,G-y0-t+4,3,'f-lo','H')+S(x1-72,y0+t-4,42,G-y0-t+4,3,'f-lo','H')
   +slabTop(x0,W,y0,t,26)+grain(x0,y0,W)+vase(x1-W*.24,y0-15,.85)+bowl(cx-W*.16,y0-14,54)},
 dining(cx,z){const W=z.W,x0=cx-W/2,x1=cx+W/2,y0=G-178,t=16;
  return shadow(cx,W/2+14)+S(x0+62,y0+t-2,24,G-y0-t+2,3,'f-lo','H')+S(x1-86,y0+t-2,24,G-y0-t+2,3,'f-lo','H')
   +S(x0+86,G-112,W-172,10,2,'f-lo')+slabTop(x0,W,y0,t,30)+grain(x0,y0-1,W,2)+vase(cx+W*.2,y0-16,.9)+bowl(cx-W*.05,y0-15,64)}
};
const dimLine=(cx,W,label)=>`<g class="dim"><path d="M${n1(cx-W/2)} ${G+38}H${cx-52}M${cx+52} ${G+38}H${n1(cx+W/2)}M${n1(cx-W/2)} ${G+31}v14M${n1(cx+W/2)} ${G+31}v14"/><text x="${cx}" y="${G+42}" text-anchor="middle">${label}</text></g>`;

/* CSS custom properties that recolour a piece (registered with @property so they animate) */
export const vars=(p,fi)=>{const h=p.finishes[fi].h;
  return {'--c':h,'--lo':mix(h,'#000000',.3),'--hi':mix(h,'#ffffff',.2),'--leg':p.leg||mix(h,'#000000',.12)}};
/* the inside of a piece's <svg>, as markup */
export const pieceMarkup=(p,si,o={})=>{const cx=o.cx??320,z=p.sizes[si];
  return DRAW[p.kind](cx,z)+(o.dim?dimLine(cx,z.W,z.dim):'')};
