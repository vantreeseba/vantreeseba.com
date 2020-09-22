
export function buildContent(data, styles) {
  return Object.entries(data).map(([key, value]) => {
    return (
      <>
        <div key={`${key}`} className={styles.key}>{key}</div>
        <div key={`${key}-value`} className={styles.value}>{value}</div>
      </>
    );
  });
}

export function buildContentTable(keys, data, styles) {
  const header = keys.map(key => {
    return <div key={`${key}`} className={styles.key}>{key}</div>;
  });

  const rows = data.map(x => {
    return keys.map(k => {
      return <div key={`${x[k]}`} className={styles.value}>{x[k]}</div>;
    });
  })

  return (
    <>
      {header}
      {rows}
    </>
  );
}
