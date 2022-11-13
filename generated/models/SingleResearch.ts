/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SingleRead } from './SingleRead';

export type SingleResearch = {
    id: string;
    deviceName: string;
    singleResearchName: string;
    isPublic: boolean;
    createdAt: string;
    data: Array<SingleRead>;
};

