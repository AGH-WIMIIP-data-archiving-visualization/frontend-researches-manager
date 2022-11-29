import { UrlObject } from "url";

type Pathname =
  | "notFound"
  | "privateScope"
  | "publicScope"
  | "project"
  | "researchInProject"
  | "groupInProject"
  | "researchInGroup"
  | "projectPublic"
  | "researchInPublicProject"
  | "groupInPublicProject"
  | "researchInPublicGroup";

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
    pathname: "/public",
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
  projectPublic: {
    pathname: "/public/project/[projectId]",
    go: ({ projectId }: { projectId?: string }) => ({
      pathname: paths.projectPublic.pathname,
      query: {
        projectId,
      },
    }),
  },
  researchInPublicProject: {
    pathname: "/public/project/[projectId]/research/[researchId]",
    go: ({
      projectId,
      researchId,
    }: {
      projectId?: string;
      researchId?: string;
    }) => ({
      pathname: paths.researchInPublicProject.pathname,
      query: {
        projectId,
        researchId,
      },
    }),
  },

  researchInProject: {
    pathname: "/private/project/[projectId]/research/[researchId]",
    go: ({
      projectId,
      researchId,
    }: {
      projectId?: string;
      researchId?: string;
    }) => ({
      pathname: paths.researchInProject.pathname,
      query: {
        projectId,
        researchId,
      },
    }),
  },

  groupInProject: {
    pathname: "/private/project/[projectId]/group/[groupId]",
    go: ({ projectId, groupId }: { projectId?: string; groupId?: string }) => ({
      pathname: paths.groupInProject.pathname,
      query: {
        projectId,
        groupId,
      },
    }),
  },

  groupInPublicProject: {
    pathname: "/public/project/[projectId]/group/[groupId]",
    go: ({ projectId, groupId }: { projectId?: string; groupId?: string }) => ({
      pathname: paths.groupInPublicProject.pathname,
      query: {
        projectId,
        groupId,
      },
    }),
  },

  researchInGroup: {
    pathname:
      "/private/project/[projectId]/group/[groupId]/research/[researchId]",
    go: ({
      projectId,
      groupId,
      researchId,
    }: {
      projectId?: string;
      groupId?: string;
      researchId?: string;
    }) => ({
      pathname: paths.researchInGroup.pathname,
      query: {
        projectId,
        groupId,
        researchId,
      },
    }),
  },

  researchInPublicGroup: {
    pathname:
      "/public/project/[projectId]/group/[groupId]/research/[researchId]",
    go: ({
      projectId,
      groupId,
      researchId,
    }: {
      projectId?: string;
      groupId?: string;
      researchId?: string;
    }) => ({
      pathname: paths.researchInPublicGroup.pathname,
      query: {
        projectId,
        groupId,
        researchId,
      },
    }),
  },
};
