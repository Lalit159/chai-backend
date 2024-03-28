// const asyncHandler = (requestHandler) => {
//     return (req,res,next) => {
//         Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
//     }
// }



function asyncHandler(requestHandler){
    return function(req, res, next){
        Promise.resolve(requestHandler(req, res, next)).catch(function(err){ // executes requestHandler asynchronously and returns a promise. If promise resolves successfully, nothing happens else if error occurs, error is passed to the next middleware.
            next(err)
        });

    };
};

export {asyncHandler}



// const asyncHandler = function(fn) {
//     return async function(req, res, next) {
//         try {
//             await fn(req, res, next);
//         } catch (error) {
//             res.status(error.code || 500).json({ // status code AND error message jayega
//                 success: false,
//                 message: error.message
//             });
//         }
//     };
// };


// const asyncHandler = (fn) => async (req, res, next) => {
//     try{
//         await fn(req, res, next)
//     }
//     catch(error){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
