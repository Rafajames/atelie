import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import { Hammer, Drill, Sparkles, RotateCcw, Play, Pause, Gem, Save } from 'lucide-react';

const KEY='atelie-save-v1';
const projects=[{id:'bust',name:'Busto clássico'},{id:'eagle',name:'Pequena águia'},{id:'vase',name:'Vaso ornamental'}];
const tools=[{id:'hammer',name:'Martelo',desc:'Remove grandes partes',power:5,Icon:Hammer},{id:'chisel',name:'Cinzel',desc:'Define as formas',power:3,Icon:Drill},{id:'polish',name:'Polimento',desc:'Refina a superfície',power:2,Icon:Sparkles}];

function Stone({progress}) {
 const scale=1-progress*.0008;
 return <group>
  <mesh castShadow scale={[scale,1,scale]}><dodecahedronGeometry args={[1.12,2]}/><meshStandardMaterial color={progress>75?'#ded6c8':'#c9c2b5'} roughness={progress>75?.48:.82}/></mesh>
  <mesh position={[0,-1.23,0]} receiveShadow><cylinderGeometry args={[1.35,1.45,.22,48]}/><meshStandardMaterial color="#5a4634"/></mesh>
 </group>;
}
function Scene({progress}) {
 return <Canvas camera={{position:[3.5,2.4,4.5],fov:38}} shadows dpr={[1,1.5]}>
  <color attach="background" args={['#25221d']}/><ambientLight intensity={1.2}/><directionalLight position={[4,6,4]} intensity={2.4} castShadow/>
  <Stone progress={progress}/><ContactShadows position={[0,-1.35,0]} opacity={.45} scale={5} blur={2.5}/><OrbitControls enablePan={false} minDistance={3} maxDistance={8}/>
 </Canvas>;
}
export default function App(){
 const [initial]=useState(()=>{try{return JSON.parse(localStorage.getItem(KEY))||{}}catch{return {}}});
 const [progress,setProgress]=useState(initial.progress||0),[projectId,setProjectId]=useState(initial.projectId||'bust'),[skill,setSkill]=useState(initial.skill||1),[toolId,setToolId]=useState('hammer'),[mode,setMode]=useState('manual'),[auto,setAuto]=useState(false),[notice,setNotice]=useState('Seu ateliê está pronto. Escolha uma ferramenta e comece.');
 const project=projects.find(p=>p.id===projectId),tool=tools.find(t=>t.id===toolId);
 useEffect(()=>{localStorage.setItem(KEY,JSON.stringify({progress,projectId,skill}))},[progress,projectId,skill]);
 useEffect(()=>{if(!auto||progress>=100)return;const timer=setInterval(()=>setProgress(p=>{const next=Math.min(100,p+.4+skill*.08);if(next>=100){setAuto(false);setNotice('Obra concluída! Sua escultura está pronta.')}return next}),1000);return()=>clearInterval(timer)},[auto,progress,skill]);
 function work(){if(progress>=100)return;setProgress(p=>Math.min(100,p+tool.power*(1+(skill-1)*.12)));setSkill(s=>Math.min(5,s+.015));setNotice(tool.name+': trabalho aplicado à peça.')}
 function reset(){setProgress(0);setAuto(false);setNotice('Novo bloco preparado na bancada.')}
 return <main className="shell">
  <header className="top"><div className="brand"><span className="mark"><Gem size={19}/></span><span>ATELIÊ<small>OFICINA DE ESCULTURA</small></span></div><div className="topmeta"><i/> PROTÓTIPO 0.1 <span><Save size={14}/> Salvamento local</span></div></header>
  <section className="intro"><div><label>SEU ESPAÇO CRIATIVO</label><h1>Da matéria à <em>obra.</em></h1><p>Um pouco de paciência, algumas ferramentas e uma peça que só você poderia criar.</p></div><div className="level"><label>PROFICIÊNCIA</label><strong>{Math.floor(skill)} <small>/ 5</small></strong><div className="track"><i style={{width:(skill%1*100)+'%'}}/></div><small>{skill<2?'Aprendiz':skill<3?'Iniciante':skill<4?'Artesão':skill<5?'Especialista':'Mestre'}</small></div></section>
  <section className="workspace"><div className="scenePanel"><div className="sceneTitle"><div><label>BANCADA DE TRABALHO</label><h2>{project.name}</h2></div><span className="tag">● MÁRMORE</span></div><div className="scene"><Scene progress={progress}/><span className="hint">ARRASTE PARA GIRAR · PINCE PARA APROXIMAR</span><div className="pct"><label>TRANSFORMAÇÃO</label><strong>{Math.round(progress)}%</strong></div></div><div className="progress"><i style={{width:progress+'%'}}/></div><div className="sceneFoot"><span>{progress>=100?'Escultura finalizada':progress>0?'Peça em desenvolvimento':'Bloco bruto de mármore'}</span><button className="link" onClick={reset}><RotateCcw size={14}/> Reiniciar peça</button></div></div>
  <aside className="panel"><section><label>01 / PROJETO</label><h3>O que vamos criar?</h3><div className="projects">{projects.map(p=><button key={p.id} className={'project '+(projectId===p.id?'chosen':'')} onClick={()=>{setProjectId(p.id);setProgress(0);setAuto(false)}}><span className="symbol">{p.id==='bust'?'◉':p.id==='eagle'?'⌁':'◌'}</span><span><b>{p.name}</b><small>Escultura em mármore</small></span></button>)}</div></section>
  <section><label>02 / FERRAMENTAS</label><h3>Escolha como trabalhar</h3><div className="tools">{tools.map(t=>{const Icon=t.Icon;return <button key={t.id} className={'tool '+(toolId===t.id?'chosen':'')} onClick={()=>setToolId(t.id)}><Icon size={19}/><b>{t.name}</b><small>{t.desc}</small></button>})}</div><button className="primary" onClick={work} disabled={progress>=100}><Hammer size={16}/> Aplicar ferramenta</button></section>
  <section><label>03 / MODO DE PRODUÇÃO</label><div className="switch"><button className={mode==='manual'?'active':''} onClick={()=>{setMode('manual');setAuto(false)}}>Manual</button><button className={mode==='auto'?'active':''} onClick={()=>{setMode('auto');setAuto(false)}}>Automático</button></div>{mode==='auto'?<><p className="desc">Deixe o artesão trabalhar. A peça evolui com o tempo e você pode pausar quando quiser.</p><button className="primary" onClick={()=>{setAuto(!auto);setNotice(auto?'Produção pausada.':'Produção automática iniciada.')}} disabled={progress>=100}>{auto?<Pause size={16}/>:<Play size={16}/>} {auto?'Pausar produção':'Iniciar produção'}</button></>:<p className="desc">Escolha uma ferramenta e aplique golpes para transformar o bloco aos poucos.</p>}</section>
  <div className="panelFoot">{(100-progress).toFixed(0)}% de trabalho restante <span>● SALVO</span></div></aside></section>
  <footer><span>{notice}</span><span>FEITO PARA CRIAR SEM PRESSA</span></footer>
 </main>;
}