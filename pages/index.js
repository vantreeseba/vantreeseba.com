import styles from '../styles/Home.module.css';

import Header from '../components/header';
import Footer from '../components/footer';
import Module from '../components/module';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={`${styles.main} ${styles.col3}`}>
        <Module title="" span="2">
          <pre>
            {`
I'm a web and game developer.

My main hobbies / interests are procedural generation and art, music, robotics and electronics.

More info and experience ------------------------------------------

Languages (High Experience):
C#
JS/TS/Node

Languages (Completed Projects):
Ruby, PHP, Python, GLSL/HLSL (Shaders), VimL, Lua, C++, Java, Haxe

Programming Related:
Building scalable, robust web applications using technologies such as Knockout.js, JQuery, JQuery.UI, Angular, Node, Express, WebApi2, FubuMVC, StructureMap, and NHibernate, React, Expo, Django, Rails, Vue, Vercel, Heroku.
Mobile applications using React Native, Expo, Cordova.
Desktop applications with Electron.
Have implemented fast search systems using both lucene and elastisearch.
Knowledge of SQL and NoSQL databases, GraphQL.
Understanding of basic physics simulations, and AI applications for game development.
Creating and Maintaining multiplayer games, supporting servers and social framework (chat, achievements) code.

Electronics, robotics, machining and prototyping:
Have implemented basic projects using arduino and esp8266.
Basic knowledge of electronics and electrical design, PCB design with kicad.
Prototyping physical objects with fusion 360, freecad, and creating them with cura and a 3d printer.
Basic knowledge of CNC machine usage, and mills / lathes for machining.
Basic knowledge of control systems, pid, kinematics (ik), kalman filters.

IT related:
Virus removal and various help-desk related tasks.
Networking on small and large scale (1000s of clients/endpoints).
Network monitoring using SNMP, cacti, etc.
OSPF, BGP, RIP, and other routing techniques.
Systems Administration for Linux (Debian) and Windows servers, including DNS, Email, web servers, and various 3rd party systems.
Virtualization using vmware server and vmware vsphere/ESXI.
`}
          </pre>
        </Module>
        <Module title="" span="1">
          <img
            style={{ width: '100%' }}
            src="https://lh3.googleusercontent.com/pw/ACtC-3c2w67A1BSWxEhP2Fzzd9Z1WUR0uOpi_koY3LimTcsmUr5v8tIq_u_IFtwQ37NiU1c9m6tvkQ10dBbLGtwqlilKt1nCzGGrFLaa9a2CIVvdxI8z3QsOzj3HmNvlcezrw1minlRRuWQCaUzpT_wNxYUCmQ=w1219-h914-no?authuser=0"
          />
        </Module>
      </main>

      <Footer />
    </div>
  );
}
