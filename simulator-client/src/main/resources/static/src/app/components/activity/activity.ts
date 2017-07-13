import {Component, OnInit, AfterViewInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ActivityService} from "../../services/activity-service";
import {ScenarioExecution} from "../../model/scenario";

@Component({
    moduleId: module.id,
    templateUrl: 'activity.html',
    styleUrls: ['activity.css'],
})
export class ActivityComponent implements OnInit, AfterViewInit {
    scenarioExecutions: ScenarioExecution[];
    errorMessage: string;

    inputValue: string = '';
    includeSuccess: boolean = true;
    includeFailed: boolean = true;
    includeActive: boolean = true;
    successState: string = 'active';
    failedState: string = 'active';
    activeState: string = 'active';

    constructor(
        private activityService: ActivityService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getActivity();
        let statusFilter = this.route.snapshot.params['status'];
        if(statusFilter) {
            if(statusFilter.toLowerCase().indexOf("success") > -1) {
                this.toggleFailed();
                this.toggleActive();
            } else if(statusFilter.toLowerCase().indexOf("failed") > -1) {
                this.toggleSuccess();
                this.toggleActive();
            } else if(statusFilter.toLowerCase().indexOf("active") > -1) {
                this.toggleSuccess();
                this.toggleFailed();
            }
        }
    }

    ngAfterViewInit(): void {
    }

    getActivity() {
        this.activityService.getScenarioExecutions()
            .subscribe(
                scenarioExecutions => this.scenarioExecutions = scenarioExecutions,
                error => this.errorMessage = <any>error
            );
    }

    clearActivity() {
        this.activityService.clearScenarioExecutions().subscribe(
            success => this.getActivity(),
            error => this.errorMessage = <any>error
        );
    }

    toggleSuccess() {
        this.includeSuccess = !this.includeSuccess;
        if(this.includeSuccess) {
            this.successState = 'active';
        } else {
            this.successState = '';
        }
    }

    toggleFailed() {
        this.includeFailed = !this.includeFailed;
        if(this.includeFailed) {
            this.failedState = 'active';
        } else {
            this.failedState = '';
        }
    }

    toggleActive() {
        this.includeActive = !this.includeActive;
        if(this.includeActive) {
            this.activeState = 'active';
        } else {
            this.activeState = '';
        }
    }
}