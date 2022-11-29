/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SingleRead } from './SingleRead';

export type SingleResearch = {
    id: string;
    deviceName: string;
    scalingFunction: string;
    unit: string;
    singleResearchName: string;
    isPublic: boolean;
    createdAt: string;
    data: Array<SingleRead>;
};

