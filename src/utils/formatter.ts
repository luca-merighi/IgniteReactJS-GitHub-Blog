import moment from 'moment'

export function relateiveDateFormatter(date: string) {
    return moment(date).fromNow()
}