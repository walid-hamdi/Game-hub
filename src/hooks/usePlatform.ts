import usePlatforms from "./usePlatforms";

export const usePlatform = (platformId?: number) => {
  const { data: platforms } = usePlatforms();

  return platforms?.results.find((platform) => platform.id === platformId);
};
