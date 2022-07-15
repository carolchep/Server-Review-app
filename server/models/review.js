import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
//holds instructions for the model
    {
        title: {type: String, required : true,minlength: 3, maxlength: 200 },

    },
    {
        timestamps: true,
    }
);

var reviewModel = mongoose.model("Reviews", reviewSchema);

export default reviewModel;