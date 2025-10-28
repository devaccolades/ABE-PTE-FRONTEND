export const mockTestData = {
  sections: [
    {
      id: "speaking",
      title: "Speaking & Writing",
      duration: 180, // Example: 3 minutes
      questions: [
        {
          id: 1,
          type: "read_aloud",
          question: "Read the following sentence aloud. (speak1)",
          text: "Artificial intelligence is transforming communication in every industry.",
        },
        {
          id: 2,
          type: "repeat_sentence",
          question: "Repeat the sentence you hear. (speak2)",
          audio: "/audio/speaking_repeat1.mp3",
        },
        {
          id: 3,
          type: "describe_image",
          question: "Describe the image shown. (speak3)",
          image: "/images/speaking_chart1.png",
        },
      ],
    },
    {
      id: "reading",
      title: "Reading",
      duration: 180, // Example: 3 minutes
      questions: [
        {
          id: 4,
          type: "fill_blank",
          question: "Complete the sentence. (read1)",
          text: "The rapid growth of technology has ____ many traditional industries.",
          options: ["transformed", "transform", "transforming"],
        },
        {
          id: 5,
          type: "multiple_choice",
          question:
            "Select the word closest in meaning to ‘innovative’. (read2)",
          options: ["creative", "ordinary", "repetitive"],
        },
        {
          id: 6,
          type: "reorder_paragraph",
          question:
            "Arrange the sentences to form a logical paragraph. (read3)",
          options: [
            "Education is evolving through the integration of technology.",
            "Online learning provides flexibility for students worldwide.",
            "Virtual classrooms are replacing traditional teaching methods.",
          ],
        },
      ],
    },
    {
      id: "listening",
      title: "Listening",
      duration: 180, // Example: 3 minutes
      questions: [
        {
          id: 7,
          type: "summarize_audio",
          question:
            "Listen and summarize the audio in one or two sentences. (listen1)",
          audio: "/audio/listening_summary1.mp3",
        },
        {
          id: 8,
          type: "multiple_choice_audio",
          question:
            "Listen to the audio and choose the correct answer. (listen2)",
          audio: "/audio/listening_mcq1.mp3",
          options: [
            "The topic is about climate change",
            "The topic is about healthcare",
            "The topic is about global trade",
          ],
        },
        {
          id: 9,
          type: "fill_blank_audio",
          question: "Listen and fill in the missing words. (listen3)",
          audio: "/audio/listening_fill1.mp3",
        },
      ],
    },
  ],
};
