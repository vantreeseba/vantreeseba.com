import _ from "lodash";

function buildValue(key, value, styles) {
  if (_.isObject(value)) {
    return (
      <div key={`${value.name}-value`} className={styles.value}>
        <a href={value.url}>
          {value.name ? value.name : value}
        </a>
      </div>
    );
  }
  return (
    <div key={`${key}-value`} className={styles.value}>
      {value.name ? value.name : value}
    </div>
  );
}

export function buildContent(data, styles) {
  console.log(data);
  return Object.entries(data).map(([key, value]) => {
    var title = _.upperFirst(_.snakeCase(key).split("_").join(" "));

    if (_.isArray(value)) {
      const values = value.map((x) => buildValue(x, x, styles));
      value = buildValue(key, values, styles);
    } else {
      value = buildValue(key, value, styles);
    }
    return (
      <>
        <div key={`${key}`} className={styles.key}>
          {title}
        </div>
        {value}
      </>
    );
  });
}

export function buildContentTable(keys, data, styles) {
  const header = keys.map((key) => {
    return (
      <div key={`${key}`} className={styles.key}>
        {key}
      </div>
    );
  });

  const rows = data.map((x) => {
    return keys.map((k) => {
      return (
        <div key={`${x[k]}`} className={styles.value}>
          {x[k]}
        </div>
      );
    });
  });

  return (
    <>
      {header}
      {rows}
    </>
  );
}
