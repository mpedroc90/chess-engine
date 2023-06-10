import { Movement } from "./index";

/**
 *  This type represents the set of possible movements a object can perform in a grid
 */
export type MovementMatrix = [row: number, column: number ][];


/**
 *  This high order function creates 
 */
export const generateMovementsGivenMatrix = (matrixMovement: MovementMatrix) =>  (maxNumberStepsAllowed: number) : Movement [] =>  {
    return matrixMovement.map<Movement>( ([rowMovement, colummsMovement]) => ({
        rowMovement,
        colummsMovement,
        maxNumberStepsAllowed,
        rules:[]
    }));
}


/** Represent the all the lineal movements in the board */
const linealMovementgMatrix: MovementMatrix =  [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1]
  ];



  
/**
 * Generate all straight moves that can performed in a chess board excepts those special move that only a pieces is allows to do. 
 */
export const generateLinealMovements =  generateMovementsGivenMatrix(linealMovementgMatrix);

