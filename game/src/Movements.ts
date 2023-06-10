import { Rule } from "./types";


/**
 *  It represents the description/metadata to the engine performs a move.
 */
export type Movement = {
    /** number of rows  from the current position that the piece can move.  */
   rowMovement: number;

   /** number of columns from the current position that the piece can move. */
   colummsMovement: number;

   /**  
    * Number of step allowed. It means that the pieces can perform the move 
    * this number of time whereas board contraints allows it  
    */
   maxNumberStepsAllowed: number;

   /**
    * Rules that  must obbey in order the move can proceed.
    */ 
   rules: Rule[];
}

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

