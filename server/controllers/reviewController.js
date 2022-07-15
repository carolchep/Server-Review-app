import reviewModel from "../models/review.js";
import Joi from "joi";

export const createReview = async (req, res) => {
try {
    const schema = Joi.object({
      title: Joi.string().min(3).max(300).required(),

    });

    const { error } = schema.validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);
    const { title } = req.body;
    const newReview = new reviewModel({title});


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

