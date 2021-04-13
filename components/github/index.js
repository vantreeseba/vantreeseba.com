import useSWR from "swr";

import styles from "./index.module.css";
import Module from "../module/";
import Loading from "../loading";

import { buildContent } from "../../lib/utils";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Github({ span = 1 }) {
  const { data, error } = useSWR("/api/github", fetcher);
  let content;


  if (error) {
    content = <div>Error fetching data from github.</div>;
  } else if (!data) {
    content = <Loading />;
  } else {
    const { viewer } = data;
  console.log(viewer);

    var repos = viewer.ContributedTo.nodes || [];

    content = buildContent(
      {
        ...viewer,
        ContributedTo: repos,
      },
      styles
    );
  }

  return (
    <Module
      title="Github"
      username="@vantreeseba"
      url="https://github.com/vantreeseba"
      span={span}
    >
      <div className={styles.content}>{content}</div>
    </Module>
  );
}
