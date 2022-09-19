import { request } from "./index";

export const PROJECTS_QUERY = `query GETALLPROJECTS {
    allProjects {
        id
        title
        excerpt
        tags
        image {
          url
        }
      }
  }`;

export const SINGLE_PROJECT_QUERY = `query GETSINGLEPROJECT($title: String) {
    project(filter: {title: {eq: $title}}) {
        tags
        title
        video {
            url
        }
        content
        id
      }
  }`;

  export const getAllProjects = async () => {
    const allProjects = await request({
        query: PROJECTS_QUERY,
    })
    return allProjects;
  }

  export const getSingleProject = async (title: string) => {
    const singleProject = await request({
        query: SINGLE_PROJECT_QUERY,
        variables: {
            title: title
        }
    })
    return singleProject;
  }