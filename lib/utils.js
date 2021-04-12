import _ from "lodash";

export function buildContent(data, styles) {
  return Object.entries(data).map(([key, value]) => {
    var title = _.upperFirst(_.snakeCase(key).split("_").join(" "));

    if (_.isArray(value) && _.isString(value[0])) {
      const values = value.map((x) => {
        return (
          <div key={`${key}-value`} className={styles.value}>
            {x}
          </div>
        );
      });
      value = (
        <div key={`${key}-value`} className={styles.value}>
          {values}
        </div>
      );
    } else {
      value = (
        <div key={`${key}-value`} className={styles.value}>
          {value}
        </div>
      );
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
