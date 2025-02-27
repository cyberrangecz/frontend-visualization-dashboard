# CyberRangeᶜᶻ Platform Dashboard Visualization

This visualization dashboard unites several visualizations and provides interactions between them. Visualization filters allow the instructor to filter the training events and their format.

## How to Use as a Library

An example of use:

```htlm
<crczp-dashboard [trainingInstanceId]="11"
                [hasReferenceSolution]="true"
                [trainingDefinitionId]="5">
</crczp-dashboard>

```

## Input parameters

`trainingInstanceId: number;`

`trainingDefinitionId: number; `

`hasReferenceSolution: boolean; ` to determine if there is a reference graph available for display
