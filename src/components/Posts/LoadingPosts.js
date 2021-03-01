import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { LOADING_POSTS } from '../../constants'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = {
    load: {
        textAlign: 'center',
        marginTop: 25,
        width: '100%'
    },
    loadIcon: {
        color: '#CCEEFF'
    }
}
const LoadingPosts = ({ classes }) => (
    <div className={classes.load}>
        <CircularProgress className={classes.loadIcon} />
    </div>
)

export default withStyles(styles)(LoadingPosts)