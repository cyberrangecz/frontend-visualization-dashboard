# CyberRangeᶜᶻ Platform Dashboard Visualization

This visualization dashboard unites several visualizations and provides interactions between them. Visualization filters allow the instructor to filter the training events and their format.

## Running the demo application

1. Configure and run the [Training service](https://github.com/cyberrangecz/backend-training) and the [User and group service](https://github.com/cyberrangecz/backend-user-and-group) or the whole [deployment](https://github.com/cyberrangecz/devops-helm).
2. Configure the [environment.local.ts](projects/visualization-dashboard-example-app/src/environments/environment.local.ts) file, pointing to the services.
3. Run `npm install`.
4. Run the app in a local environment and ssl via `npm run start`.
5. Navigate to `https://localhost:4200/`. The app will automatically reload if you change any of the source files. The app will use a self-signed certificate, so you will need to accept it in the browser.

## Input parameters

`trainingInstanceId: number;`

`trainingDefinitionId: number; `

`hasReferenceSolution: boolean; ` to determine if there is a reference graph available for display

## How to Use as a Library

An example of use:

```htlm
<crczp-dashboard [trainingInstanceId]="11"
                [hasReferenceSolution]="true"
                [trainingDefinitionId]="5">
</crczp-dashboard>

```




