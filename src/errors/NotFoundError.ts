import { BaseError } from "./BaseError";

// NotFoundError: usada para erros de recurso não encontrado
// exemplo: tentar editar um recurso cujo id não existe

export class NotFoundError extends BaseError {
    constructor(
        message: string = "Recurso não encontrado"
    ) {
        super(404, message)
    }
}