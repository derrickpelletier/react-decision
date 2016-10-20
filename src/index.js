/**
 * Decision
 *
 * Wrap a clickable component with the Decision decorator to display a modal
 * that let's you ascertain user intentions before your action!

 */
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import reactCSS from 'reactcss';

//
const baseStyles =  {
  default: {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, .85)',
      zIndex: 1000
    },
    //overrider
    content: {
      background: 'none',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
};

const classSets = {
  semantic: {
    modal: 'ui small basic test modal transition visible active',
    header: 'ui header',
    content: 'content',
    actions: 'actions',
    negativeButton: 'ui red basic cancel inverted button',
    positiveButton: 'ui green ok inverted button'
  },
  tachyons: {
    modal: 'mw6 white-90 pa3',
    header: 'f4 mb2 lh-title',
    content: 'f5 lh-copy',
    actions: 'bt btw1 b--white-10 pt3 mt3',
    negativeButton: 'f6 link dim br2 ba mr2 bw1 ph3 pv2 dib white-80 pointer',
    positiveButton: 'f6 link dim br2 ba bw1 ph3 pv2 dib b green pointer'
  }
}

const Reposition = React.createClass({
  getInitialState: function () {
    return {
      correction: -60
    };
  },

  componentDidMount: function () {
    const correction = ReactDOM.findDOMNode(this.wrapperNode).offsetHeight / -2;
    this.setState({
      correction
    });
  },

  render: function () {
    let styleBlock = {}
    if (!this.props.useFlex) {
      styleBlock = {
        top: '50%',
        position: 'absolute',
        marginTop: this.state.correction
      }
    }
    return (
      <div
        className={this.props.className}
        style={styleBlock}
        ref={(node) => this.wrapperNode = node}
        >{this.props.children}</div>
    );
  }
})

const Decision = React.createClass({
  displayName: 'Decision',

  propTypes: {
    header: React.PropTypes.node,
    message: React.PropTypes.node,
    positiveLabel: React.PropTypes.string,
    negativeLabel: React.PropTypes.string,
    classSet: React.PropTypes.string,
    useFlex: React.PropTypes.bool
  },

  getInitialState: function () {
    return {
      isOpen: false
    };
  },

  getDefaultProps: function () {
    return {
      header: null,
      message: 'Are you sure?',
      positiveLabel: 'Confirm',
      negativeLabel: 'Abort',
      classSet: 'semantic',
      useFlex: true
    }
  },

  block: function () {
    this.setState({
      isOpen: true
    });
  },

  closeModal: function () {
    this.setState({
      isOpen: false
    });
  },

  positiveClick: function () {
    this.setState({
      isOpen: false
    });
    this.continue && this.continue();
  },

  render: function () {

    const {
      classSet,
      onClick
    } = this.props;

    let chosenClasses = {};
    if(typeof classSet === 'object') {
      chosenClasses = classSet;
    } else if(classSets[classSet]) {
      chosenClasses = classSets[classSet];
    }

    const headerNode = this.props.header ? (
      <div className={chosenClasses.header}>{this.props.header}</div>
    ) : null;

    const verticalCorrect = headerNode ? -93 : -60;

    const children = React.Children.toArray(this.props.children);
    if(!children.length) return null;

    let targetChild = children[0]

    if(typeof targetChild === 'string') {
      targetChild = <button>{targetChild}</button>
    }

    // steal the action for this wrapper.
    this.continue = onClick || targetChild.props.onClick;

    // Append the modal into the childs children
    let grandChildren = React.Children.toArray(targetChild.props.children);
    grandChildren.push(
      <Modal
        isOpen={this.state.isOpen}
        onRequestClose={this.closeModal}
        style={reactCSS(baseStyles)}
        >
        <Reposition
          useFlex={this.props.useFlex}
          className={chosenClasses.modal || ''}>
          {headerNode}
          <div className={chosenClasses.content || ''}>
            {this.props.message}
          </div>
          <div className={chosenClasses.actions || ''}>
            <a
              className={chosenClasses.negativeButton || ''}
              onClick={this.closeModal}
              >
                {this.props.negativeLabel}
            </a>
            <a
              className={chosenClasses.positiveButton || ''}
              onClick={this.positiveClick}
              >
                {this.props.positiveLabel}
            </a>
          </div>
        </Reposition>
      </Modal>
    );

    return React.cloneElement(targetChild, {
      onClick: this.block,
      children: grandChildren
    });
  }
});

export default Decision;
