/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConductLabjackResearchDto } from '../models/ConductLabjackResearchDto';
import type { CreateDeviceDto } from '../models/CreateDeviceDto';
import type { CreateGroupResearchkDto } from '../models/CreateGroupResearchkDto';
import type { CreateProjectDto } from '../models/CreateProjectDto';
import type { CreateSingleResearchkDto } from '../models/CreateSingleResearchkDto';
import type { Device } from '../models/Device';
import type { Project } from '../models/Project';
import type { ProjectResponseDto } from '../models/ProjectResponseDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * @returns any
     * @throws ApiError
     */
    public static singleResearchControllerGetLabjackData(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/single-research/labjack-1',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static singleResearchControllerGetAllSingleResearches(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/single-research',
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static singleResearchControllerCreateSingleResearch(
        requestBody: CreateSingleResearchkDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/single-research',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static singleResearchControllerGetSingleResearchById(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/single-research/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static singleResearchControllerConductLabjackResearch(
        id: string,
        requestBody: ConductLabjackResearchDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/single-research/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static singleResearchControllerDeleteResearchById(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/single-research/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static groupResearchControllerCreateGroupeResearch(
        requestBody: CreateGroupResearchkDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/group-research',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static groupResearchControllerGetAllGroupResearches(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/group-research',
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static groupResearchControllerGetGroupResearchById(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/group-research/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static groupResearchControllerDeleteGroupById(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/group-research/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param groupId
     * @param singleId
     * @returns any
     * @throws ApiError
     */
    public static groupResearchControllerInsertSingleResearchToGroup(
        groupId: string,
        singleId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/group-research/{groupID}/single-research/{singleID}',
            path: {
                'groupID': groupId,
                'singleID': singleId,
            },
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static projectControllerCreateSingleResearch(
        requestBody: CreateProjectDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/project',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns Project
     * @throws ApiError
     */
    public static projectControllerGetAllProjects(): CancelablePromise<Array<Project>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/project',
        });
    }

    /**
     * @param id
     * @returns ProjectResponseDto
     * @throws ApiError
     */
    public static projectControllerGetProjectId(
        id: string,
    ): CancelablePromise<ProjectResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/project/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static projectControllerDeleteDeviceById(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/project/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param projectId
     * @param singleId
     * @returns any
     * @throws ApiError
     */
    public static projectControllerInsertSingleResearchToProject(
        projectId: string,
        singleId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/project/{projectID}/single-research/{singleID}',
            path: {
                'projectID': projectId,
                'singleID': singleId,
            },
        });
    }

    /**
     * @param projectId
     * @param groupId
     * @returns any
     * @throws ApiError
     */
    public static projectControllerInsertGroupResearchToProject(
        projectId: string,
        groupId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/project/{projectID}/group-research/{groupID}',
            path: {
                'projectID': projectId,
                'groupID': groupId,
            },
        });
    }

    /**
     * @returns Device
     * @throws ApiError
     */
    public static deviceControllerGetAllDevices(): CancelablePromise<Array<Device>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/device',
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static deviceControllerCreateDevice(
        requestBody: CreateDeviceDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/device',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static deviceControllerGetDeviceById(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/device/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static deviceControllerDeleteDeviceById(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/device/{id}',
            path: {
                'id': id,
            },
        });
    }

}
