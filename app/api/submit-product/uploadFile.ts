export const uploadBase64 = async (
  base64String: string,
  key: string,
  cloudinary: any,
  type: "image" | "video"
) => {
  if (base64String.startsWith(`data:${type}/`)) {
    const [_, format, data] =
      base64String.match(new RegExp(`^data:${type}/(\\w+);base64,(.+)$`)) || []
    if (!format || !data) {
      throw new Error(`Invalid ${key} format`)
    }
    const response = await cloudinary.uploader.upload(
      `data:${type}/${format};base64,${data}`,
      {
        resource_type: type,
        folder: `klick_product_${type}s`,
      }
    )
    return response.secure_url
  } else {
    throw new Error(`Invalid ${key} format`)
  }
}
