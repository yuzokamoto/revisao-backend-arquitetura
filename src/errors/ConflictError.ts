import { BaseError } from "./BaseError";

// ConflictError: usada para erros de conflito de dados
// exemplo: criar conta com e-mail já existente

export class ConflictError extends BaseError {
    constructor(
        message: string = "Já existe um recurso com esse identificador"
    ) {
        super(409, message)
    }
}