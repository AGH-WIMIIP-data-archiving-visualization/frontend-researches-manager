/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SingleResearch } from './SingleResearch';

export type GroupResearchResponseDto = {
    id: string;
    groupResearchName: string;
    description: string;
    isPublic: boolean;
    createdAt: string;
    updatedAt: string;
    singleResearches: Array<SingleResearch>;
};

