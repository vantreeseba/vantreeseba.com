
export function buildContent(data, styles) {
  return Object.entries(data).map(([key, value]) => {
    // const split = value.toString().split('\n').map(v => <div className={styles.value}>{v}</div>);
    
    console.log(value);

    return (
      <>
        <div key={`${key}`} className={styles.key}>{key}</div>
        <div key={`${key}-value`} className={styles.value}>{value}</div>
      </>
    );
  });
}
