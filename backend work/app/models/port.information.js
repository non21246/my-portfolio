module.exports = (mongoose) => {
    var schema = mongoose.Schema(
        {
            name: String,
            description: String,
            github_url: String
        },
        {
            timestamps: true, versionKey: false
        }
        
    )
    const experience = mongoose.model("work", schema)
    return experience
}