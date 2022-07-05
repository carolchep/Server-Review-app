import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
    {
        title: {type: String, required : true},

    },
    {
        timestamps: true,
    }
);

var reviewModel = mongoose.model("Reviews", reviewSchema);

export default reviewModel;