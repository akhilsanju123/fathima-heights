import montessoriShapes from "@/assets/uploaded/montessori-shapes.png.asset.json";
import montessoriCircleTime from "@/assets/uploaded/montessori-circle-time.png.asset.json";
import readingCircle from "@/assets/uploaded/reading-circle.png.asset.json";
import activityLearning from "@/assets/uploaded/activity-learning.png.asset.json";
import writingPractice from "@/assets/uploaded/writing-practice.png.asset.json";
import parentsDay from "@/assets/uploaded/parents-day.png.asset.json";
import awardCeremony from "@/assets/uploaded/award-ceremony.png.asset.json";
import sportsParade from "@/assets/uploaded/sports-parade.png.asset.json";

export const SITE_MEDIA = {
  montessoriShapes: montessoriShapes.url,
  montessoriCircleTime: montessoriCircleTime.url,
  readingCircle: readingCircle.url,
  activityLearning: activityLearning.url,
  writingPractice: writingPractice.url,
  parentsDay: parentsDay.url,
  awardCeremony: awardCeremony.url,
  sportsParade: sportsParade.url,
};

export const SCHOOL_GALLERY_IMAGES = [
  { src: montessoriShapes.url, cat: "Classrooms" as const, label: "Montessori Shapes Activity" },
  { src: montessoriCircleTime.url, cat: "Classrooms" as const, label: "Circle Time Learning" },
  { src: readingCircle.url, cat: "Classrooms" as const, label: "Reading Circle" },
  { src: activityLearning.url, cat: "Classrooms" as const, label: "Interactive Activity" },
  { src: writingPractice.url, cat: "Classrooms" as const, label: "Writing Practice Session" },
  { src: parentsDay.url, cat: "Events" as const, label: "Parents Day Program" },
  { src: awardCeremony.url, cat: "Achievements" as const, label: "Student Award Ceremony" },
  { src: sportsParade.url, cat: "Achievements" as const, label: "Sports Parade" },
];
