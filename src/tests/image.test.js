const Image = require("../models/image.model");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

describe("Image", () => {
  const parameter = {
    tag: "Samoyed",
    perPage: 18,
    page: 1,
  };

  test("Should get object", () => {
    expect.assertions(1);
    expect(Image.getImage(parameter)).toMatchObject({});
  });

  test("Should return resolve", async () => {
    expect.assertions(1);

    try {
      await expect(Image.getImage(parameter)).resolves.toEqual(
        expect.objectContaining({
          data: expect.any(Array),
          message: expect.any(String),
        })
      );
    } catch (err) {
      await expect(err).toMatchObject({});
    }
  });

  test("should return rejects", async () => {
    await expect(Image.getImage(true, true, true)).rejects.toMatchObject({});
  });
});
