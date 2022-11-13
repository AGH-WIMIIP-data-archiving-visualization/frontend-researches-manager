import { UrlObject } from "url";

type Pathname = "notFound" | "privateScope" | "publicScope" | "project";

type Paths = {
  [key in Pathname]: {
    pathname: string;
    relation?: {
      type: "parent";
      key: Pathname;
    };
    go: (x?: { [key: string]: string } | any) => UrlObject;
  };
};

export const paths: Paths = {
  notFound: {
    pathname: "/404",
    go: () => ({
      pathname: paths.notFound.pathname,
      query: {},
    }),
  },
  privateScope: {
    pathname: "/private",
    go: () => ({
      pathname: paths.privateScope.pathname,
      query: {},
    }),
  },
  publicScope: {
    pathname: "/",
    go: () => ({
      pathname: paths.publicScope.pathname,
      query: {},
    }),
  },
  project: {
    pathname: "/private/project/[projectId]",
    go: ({ projectId }: { projectId?: string }) => ({
      pathname: paths.project.pathname,
      query: {
        projectId,
      },
    }),
  },
};
