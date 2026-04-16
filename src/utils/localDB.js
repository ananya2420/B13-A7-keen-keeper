const getAllCallListFromLocalDB = () => {
  const allCallList = localStorage.getItem("callList");

  try {
    return allCallList ? JSON.parse(allCallList) : [];
  } catch {
    return [];
  }
};

const addCallListToLocalDB = (call) => {
  const allCalls = getAllCallListFromLocalDB();
  const exists = allCalls.find(cl => cl.id === call.id);

  if (!exists) {
    allCalls.push(call);
    localStorage.setItem("callList", JSON.stringify(allCalls));
  }
};

const getAllTextListFromLocalDB = () => {
  const data = localStorage.getItem("textList");

  try {
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const addTextListToLocalDB = (text) => {
  const allTexts = getAllTextListFromLocalDB();
  const exists = allTexts.find(t => t.id === text.id);

  if (!exists) {
    allTexts.push(text);
    localStorage.setItem("textList", JSON.stringify(allTexts));
  }
};

const getAllVideoListFromLocalDB = () => {
  const data = localStorage.getItem("videoList");

  try {
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const addVideoListToLocalDB = (video) => {
  const allVideos = getAllVideoListFromLocalDB();
  const exists = allVideos.find(v => v.id === video.id);

  if (!exists) {
    allVideos.push(video);
    localStorage.setItem("videoList", JSON.stringify(allVideos));
  }
};

export {
  getAllCallListFromLocalDB,
  addCallListToLocalDB,
  getAllTextListFromLocalDB,
  addTextListToLocalDB,
  getAllVideoListFromLocalDB,
  addVideoListToLocalDB
};