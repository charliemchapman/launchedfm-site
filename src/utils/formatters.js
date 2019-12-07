export function formatDuration(unformattedString) {
    let chunks = unformattedString.split(":")
    if (chunks.length != 3) { return unformattedString }

    let hours = Number(chunks[0])
    let minutes = Number(chunks[1])
    let seconds = Number(chunks[2])

    let totalMinutes = (hours * 60) + minutes

    return `${totalMinutes} minutes`
}