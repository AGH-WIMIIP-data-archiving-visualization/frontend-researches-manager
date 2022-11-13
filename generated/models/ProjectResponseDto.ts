/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupResearch } from './GroupResearch';
import type { SingleResearch } from './SingleResearch';

export type ProjectResponseDto = {
    id: string;
    projectName: string;
    description: string;
    isPublic: boolean;
    createdAt: string;
    updatedAt: string;
    groupsResearch: Array<GroupResearch>;
    singleResearches: Array<SingleResearch>;
};

