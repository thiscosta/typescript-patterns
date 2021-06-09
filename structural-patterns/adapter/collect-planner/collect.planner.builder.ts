import { MaestroStretchService } from "../maestro/maestro.stretch.service";
import { CollectPlanner } from "./collect.planner";

export class CollectPlannerBuilder {
    static builder(): CollectPlannerBuild {
        return new CollectPlannerBuild();
    }
}

class CollectPlannerBuild {

    build(maestroStretchService: MaestroStretchService) : CollectPlanner {
        return new CollectPlanner(maestroStretchService);
    }

}


