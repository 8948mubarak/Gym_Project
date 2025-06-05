import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Unleash your full potential with our expert-designed, high-intensity workout routines.
Whether you are building strength, burning fat, or boosting endurance — we’ve got you covered.
Join the movement and take your fitness journey to the next level.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Level up your training with our most popular and results-driven bootcamps.
Designed by top coaches, each program targets specific goals with focused intensity.
Whether you're new to fitness or a seasoned athlete, there's a challenge waiting for you.
Explore our featured bootcamps and discover what your body is truly capable of.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Fat Burn Express.</h4>
            <p>
              Torch calories with this high-energy HIIT bootcamp designed to shred fat fast.
Short bursts of intense movement keep your metabolism fired up long after the session ends.
            </p>
          </div>
          <div>
            <h4>Strength & Power</h4>
            <p>
              Build muscle, boost endurance, and master compound lifts in a structured, progressive format.
Perfect for those serious about gaining strength with proper form and coaching.
            </p>
          </div>
          <div>
            <h4>Core & Mobility Reset.</h4>
            <p>
              Focus on flexibility, core strength, and injury prevention through functional movement.
Great for recovery days or balancing intense training with active rest.
            </p>
          </div>
          <div>
            <h4>Total Body challenge</h4>
            <p>
              A full-body bootcamp that combines cardio, strength, and agility drills for complete conditioning.
Each session is different to keep your mind sharp and your body guessing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
