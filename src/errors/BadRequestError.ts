import { BaseError } from "./BaseError";

// BadRequestError: usada para erros de solicitação inválida

export class BadRequestError extends BaseError {
    constructor(
        message: string = "Requisição inválida"
    ) {
        super(400, message)
    }
}