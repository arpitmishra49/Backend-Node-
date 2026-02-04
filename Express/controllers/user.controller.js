export const getUser = (req, res) => {
    res.json({
        success: true,
        data:[]
    });
}

// export const createUser = (req, res) => {
//     const userData = req.body;
//     res.status(201).json({
//         success: true,
//         message: "User created successfully",
//         data: userData
//     });

// }

export const createUser = (req, res) => {
    try{
        const {name}=req.body;
        if(!name){
            return res.status(400).json({
                success:false,
                message:"Name is required"
            });
        }
        res.status(201).json({
            success:true,
            message:"User created successfully",
            data:{name}
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Server Error"
        });
    }
}    