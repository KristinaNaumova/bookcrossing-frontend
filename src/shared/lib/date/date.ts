import dayjs from 'dayjs'
import ru from 'dayjs/locale/ru';
import en from 'dayjs/locale/en';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import timezone from "dayjs/plugin/timezone";

dayjs.extend(LocalizedFormat)

dayjs.extend(timezone);

dayjs.tz.setDefault("Europe/Moscow")


export const formatDate = (date: string, format: string = 'DD.MM.YYYY', locale?: string) => {
    return dayjs.tz(date).locale(locale === 'ru' ? ru : en).format(format)
}

export const parseDate = (date: string) => {
    const val = dayjs(date).format('DD.MM.YYYY HH:mm')

    if (val === 'Invalid Date') {
        return '-'
    }

    return val
}
