// BaseError: classe genérica que pode ser estendida para
// criar classes de erro específicas

export abstract class BaseError extends Error {
    constructor(
        public statusCode: number,
        message: string
    ) {
        super(message)
    }
}