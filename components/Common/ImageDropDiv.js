import React from "react";
import { Form, Segment, Image, Icon, Header } from "semantic-ui-react";

function ImageDropDiv({
  highlighted,
  setHighlighted,
  inputRef,
  handleChange,
  mediaPreview,
  setMediaPreview,
  setMedia,
}) {
  return (
    <>
      <Form.Field>
        <Segment placeholder basic secondary>
          <input
            style={{ display: "none" }}
            type="file"
            accept="image/*"
            onChange={handleChange}
            name="media"
            ref={inputRef}
          />
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setHighlighted(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setHighlighted(false);
            }}
            onDrop={(e) => {
              e.preventDefault();
              setHighlighted(true);

              const droppedFile = Array.from(e.dataTransfer.files); // Get dropped files
              setMedia(droppedFile[0]); // Get the first image that user Droppded and asign it to SetMedia
              setMediaPreview(URL.createObjectURL(droppedFile[0])); // Create a preview from the file that user dropped.
              console.log(e.dataTransfer.files);
            }}
          >
            {mediaPreview === null ? (
              <>
                <Segment color={highlighted ? "green" : ""} placeholder basic>
                  <Header icon>
                    <Icon
                      name="file image outline"
                      style={{ cursor: "pointer" }}
                      onClick={() => inputRef.current.click()}
                    />
                    Drag and Drop or Click To Upload Image
                  </Header>
                </Segment>
              </>
            ) : (
              <>
                <Segment color="green" placeholder basic>
                  <Image
                    src={mediaPreview}
                    size="medium"
                    centered
                    style={{ cursor: "pointer" }}
                    onClick={() => inputRef.current.click()}
                  />
                </Segment>
              </>
            )}
          </div>
        </Segment>
      </Form.Field>
    </>
  );
}

export default ImageDropDiv;
