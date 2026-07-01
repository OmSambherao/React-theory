export async function getCFData() {
    // In Vite, environment variables prefixed with VITE_ are exposed on import.meta.env
    const handle = import.meta.env.VITE_CF_HANDLE;

    if (!handle) {
        throw new Error("Codeforces handle is not defined. Please set VITE_CF_HANDLE in your .env file.");
    }

    try {
        // Fetch user info and submission statuses in parallel
        const [infoRes, statusRes] = await Promise.all([
            fetch(`https://codeforces.com/api/user.info?handles=${handle}`),
            fetch(`https://codeforces.com/api/user.status?handle=${handle}`)
        ]);

        if (!infoRes.ok) {
            throw new Error(`Failed to fetch Codeforces user info: ${infoRes.status} ${infoRes.statusText}`);
        }
        if (!statusRes.ok) {
            throw new Error(`Failed to fetch Codeforces submission status: ${statusRes.status} ${statusRes.statusText}`);
        }

        const infoData = await infoRes.json();
        const statusData = await statusRes.json();

        // Calculate the number of unique solved problems
        const solvedProblems = new Set();
        statusData.result.forEach(submission => {
            if (submission.verdict === 'OK') {
                // Create a unique identifier for each problem
                const problemId = `${submission.problem.contestId}-${submission.problem.index}`;
                solvedProblems.add(problemId);
            }
        });

        // Combine user info with the solved count
        return { ...infoData.result[0], solvedCount: solvedProblems.size };

    } catch (error) {
        console.error("Error fetching Codeforces data:", error);
        throw error; // Re-throw the error to be handled by the caller
    }
}