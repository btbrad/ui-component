<template>
    <button class="g-button" :class="`icon-${iconPosition}`">
        <g-icon v-if="icon" :name="icon" class="icon"></g-icon>
        <g-icon v-if="icon && icon === 'loading'" :name="icon" class="icon loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        name: "g-button",
        props: {
            icon: {
                type: String
            },
            'icon-position': {
                type: String,
                default: 'left',
                validator: (value) => {
                    // if (value !== 'left' && value !== 'right') {
                    //     return false
                    // } else {
                    //     return true
                    // }
                    // return !(value !== 'left' && value !== 'right')
                    return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    .g-button {
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .icon {
            order: 1;
            margin-left: 0;
            margin-right: .1em;
        }
        > .content {
            order: 2;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin-left: .1em;
                margin-right: 0;
            }
            > .content {
                order: 1;
            }
        }
        .loading {
            animation: spin 2s infinite linear;
        }
    }
</style>