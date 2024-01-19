import styles from './index.module.css';
import Module from '../old/module';

export default function Resume() {
  return (
    <div style={{ padding: '5px' }}>
      <pre className={styles['resume-list']}>
        {`
I'm a web and game developer.

My main hobbies / interests are procedural generation and art, music, robotics and electronics.
        `}
      </pre>
      <span className={styles.title}>Languages (High Experience):</span>
      <ul className={styles['resume-list']}>
        <li>C#</li>
        <li>JS/TS/Node</li>
      </ul>
      <span className={styles.title}>
        Languages (Completed Projects using):
      </span>
      <ul className={styles['resume-list']}>
        <li>GLSL/HLSL</li>
        <li>C++</li>
        <li>Java</li>
        <li>Haxe</li>
        <li>Ruby</li>
        <li>PHP</li>
        <li>Python</li>
        <li>Lua</li>
      </ul>
      <span className={styles.title}>Programming Experience:</span>
      <ul className={styles['resume-list']}>
        <li>Building web applications, using a number of frameworks.</li>
        <li>Building Desktop applications using electron.</li>
      </ul>
      <span className={styles.title}>Web Frameworks:</span>
      <ul className={styles['resume-list']}>
        <li>React</li>
        <li>Angular</li>
        <li>JQuery/Jquery UI</li>
        <li>Express</li>
        <li>WebApi2</li>
        <li>FubuMVC</li>
        <li>StructureMap</li>
        <li>NHibernate</li>
        <li>Expo</li>
        <li>Django</li>
        <li>Rails</li>
        <li>Vue</li>
        <li>Vercel</li>
      </ul>
      <span className={styles.title}>Misc Frameworks:</span>
      <ul className={styles['resume-list']}>
        <li>Electron</li>
        <li>React Native</li>
        <li>Expo</li>
        <li>Cordova</li>
      </ul>
      <span className={styles.title}>Database Experience:</span>
      <ul className={styles['resume-list']}>
        <li>GraphQL</li>
        <li>Postgres</li>
        <li>MongoDB</li>
        <li>DynamoDB</li>
        <li>Neo4j</li>
        <li>Lucene</li>
        <li>Elastisearch</li>
      </ul>
      <span className={styles.title}>Game development experience:</span>
      <ul className={styles['resume-list']}>
        <li>Basic physics simulations.</li>
        <li>AI systems, state machines, behaviour trees, GOAP.</li>
        <li>Creating/Maintaining multiplayer games.</li>
        <li>Chat systems for multiplayer.</li>
        <li>Achievement systems.</li>
      </ul>
      <span className={styles.title}>Electronics/Prototyping Experience:</span>
      <ul className={styles['resume-list']}>
        <li>Basic projects using arduino and esp8266.</li>
        <li>Basic electrical/pcb design using kicad.</li>
        <li>Prototyping physical objects using fusion 360, freecad.</li>
        <li>3D printing.</li>
        <li>Basic CNC and Manual milling, lathing.</li>
        <li>Control systems: PID, IK, filtering (kalman).</li>
        <li>Soldering, diagnostics.</li>
      </ul>
      <span className={styles.title}>IT Experience:</span>
      <ul className={styles['resume-list']}>
        <li>Virus removal, misc help desk related tasks.</li>
        <li>Physical repair and maintainence of PC equipment.</li>
        <li>Systems administration for windows and linux servers.</li>
        <li>Maintaining DNS, Email, web and misc servers.</li>
        <li>Vritualization technologies, VMWare/ESXI.</li>
      </ul>
      <span className={styles.title}>Networking Experience:</span>
      <ul className={styles['resume-list']}>
        <li>Large/Small network setup (1000s of clients/endpoints)</li>
        <li>Monitoring using SNMP, cacti.</li>
        <li>Internal device security using LDAP.</li>
        <li>Advanced routing: OSPF, GBP, RIP.</li>
      </ul>
    </div>
  );
}
