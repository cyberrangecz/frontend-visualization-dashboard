# KYPO Dashboard Visualization

This visualization dashboard unites several visualizations and provides interactions between them. Visualization filters allow the instructor to filter the training events and their format.

## Development Run 

1.  Run `npm install`.
2.  Install json-server `npm install -g json-server`.
3.  Run the server with provided parameters `json-server -w ./utils/json-server/db.js --routes ./utils/json-server/routes.json --middlewares ./utils/json-server/server.js`.
4.  Run the app in local environment and ssl `ng serve --configuration local --ssl`
5.  Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Input parameters

`trainingInstanceId: number;`

`trainingDefinitionId: number; `

`hasReferenceSolution: boolean; ` to determine if there is a reference graph available for display


## How to Use as a Library

An example of use:

```typescript
<kypo-dashboard [trainingInstanceId]="11"
                [hasReferenceSolution]="true"
                [trainingDefinitionId]="5">
</kypo-dashboard>

```




