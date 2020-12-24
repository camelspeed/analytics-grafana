import * as express from 'express';

export const errorsMiddleWare = async function(req, res, next) {
    console.log("ERRORS middleware...");
    next();
    return;
}