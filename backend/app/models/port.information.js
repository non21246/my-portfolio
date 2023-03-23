module.exports = (mongoose) => {
    var schema = mongoose.Schema(
        {
            uml_name: String,
            percent: Number
        },
        {
            timestamps: true, versionKey: false
        }
        
    )
    const experience = mongoose.model("experience", schema)
    return experience
}