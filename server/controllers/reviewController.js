import reviewModel from "../models/review.js";


export const createReview = async (req, res) => {

    const newReview = new reviewModel(req.body);

    try {

        await newReview.save();
        res.status(200).json(newReview);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getReview = async (req, res) => {
    const id = req.params.id;

    try {
        const review = await reviewModel.findById(id);
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getAllReviews = async (req, res) => {

    try {
        let reviews = await reviewModel.find();

        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json(error);
    }
};

